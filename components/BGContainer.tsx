import { useEffect, useState } from "react";
import Card from "./Card";
import Image from "next/image";
import * as _ from "lodash-es";

const BGContainer = () => {
  const cardList = [
    {
      label: "Hotel Booking",
      icon: "HotelBooking.svg",
      right: 150,
      top: -200,
    },
    {
      label: "Flight Tickets",
      icon: "FlightTickets.svg",
      right: -400,
      top: -250,
    },
    {
      label: "Local Events",
      icon: "LocalEvents.svg",
      right: 50,
      top: 200,
    },
    {
      label: "Tour Guide",
      icon: "TourGuide.svg",
      right: -500,
      top: 150,
    },
    {
      label: (
        <div>
          <div className="text-primary text-xs mb-2">Customer Service</div>
          <div className="font-bold">+12 345 6789 0</div>
        </div>
      ),
      icon: "Call.svg",
      right: -400,
      top: 300,
    },
  ];

  const [centerPoint, setCenterPoint] = useState({ x: 0, y: 0, scale: 1 });

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // 获取图片中心点
  const getCenter = () => {
    const bgContainer = document.getElementById("bg-container")!!;

    // 获取容器的尺寸
    const containerWidth = bgContainer.offsetWidth;
    const containerHeight = bgContainer.offsetHeight;

    // 获取背景图的原始尺寸，这里假设你知道这些尺寸
    const bgImageOriginalWidth = 1291; // 背景图的原始宽度
    const bgImageOriginalHeight = 1080; // 背景图的原始高度

    // 根据background-size属性计算缩放比例
    // 这里以'contain'为例，'cover'的计算方式类似，只是比较宽高比的方式不同
    let scaleWidth = containerWidth / bgImageOriginalWidth;
    let scaleHeight = containerHeight / bgImageOriginalHeight;
    const scale = Math.min(scaleWidth, scaleHeight); // 使用较小的缩放比例以适应容器

    // 计算背景图的实际显示尺寸
    const bgImageDisplayWidth = bgImageOriginalWidth * scale;
    const bgImageDisplayHeight = bgImageOriginalHeight * scale;

    // 由于background-position: right center，背景图在容器中右对齐且垂直居中
    const centerPointX = containerWidth - bgImageDisplayWidth / 2;
    const centerPointY = bgImageDisplayHeight / 2;

    // 如果背景图被缩放，你可能需要根据容器的尺寸来调整中心点坐标
    // 这里我们假设SVG是按照原始尺寸显示的，所以不需要调整
    const centerPoint = {
      x: centerPointX,
      y: centerPointY,
      scale: scale,
    };
    setCenterPoint(centerPoint);
  };

  // 定义一个事件处理函数
  const handleResize = () => {
    // 更新状态以响应窗口尺寸的变化
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const transformElement = (clientX: number, clientY: number) => {
    const multiple = 50;
    const element = document.getElementById("transform-container")!!;
    let box = element.getBoundingClientRect();
    let calcX = -(clientX - box.x - box.width / 2) / multiple;
    let calcY = (clientY - box.y - box.height / 2) / multiple;

    element.style.transform =
      "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
  };

  const handleTransform = (e: { clientX: number; clientY: number }) => {
    window.requestAnimationFrame(() => {
      transformElement(e.clientX, e.clientY);
    });
  };

  const resetTransform = () => {
    window.requestAnimationFrame(() => {
      const element = document.getElementById("transform-container")!!;
      element.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  };

  // 使用useEffect来监听窗口的resize事件
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 添加事件监听器
      const mouseOverContainer = document.getElementsByTagName("body")[0];
      window.addEventListener("resize", handleResize);
      mouseOverContainer.addEventListener("mousemove", handleTransform);
      mouseOverContainer.addEventListener("mouseleave", resetTransform);
    }
    // 清除函数，用于移除事件监听器
    return () => {
      if (typeof window !== "undefined") {
        const mouseOverContainer = document.getElementsByTagName("body")[0];
        window.removeEventListener("resize", handleResize);
        mouseOverContainer.removeEventListener("mousemove", handleTransform);
      }
    };
  }, []); // 空依赖数组意味着这个effect只在组件挂载时运行一次

  useEffect(() => {
    getCenter();
  }, [windowSize]);

  return (
    <div id="bg-container" className="bg-container">
      <div
        id="transform-container"
        className=" bg-transparent w-12 h-12 rounded-full relative"
        style={{
          top: centerPoint.y,
          left: centerPoint.x,
        }}
      >
        {cardList.map(({ label, right, top, icon }, index) => {
          return (
            <Card
              key={index}
              className="absolute floating"
              style={{
                right: `${right * centerPoint.scale}px`,
                top: `${top * centerPoint.scale}px`,
                scale: Math.min(centerPoint.scale, 1),
              }}
              icon={
                <Image
                  src={`/icons/${icon}`}
                  className="w-full h-full"
                  width={40}
                  height={40}
                  alt={_.isString(label) ? label : ""}
                />
              }
              label={label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BGContainer;
