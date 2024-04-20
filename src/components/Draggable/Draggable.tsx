import type { MouseEvent as MouseEventReact } from "react";
import React, { useEffect, useRef, useState } from "react";

import { styles } from "./Draggable.styles";

const useDraggable = () => {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  }>();
  const dragging = useRef<{
    offsetX: number;
    offsetY: number;
  }>();
  const clickedMouse = useRef<ReturnType<typeof setTimeout>>();
  const refDialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const disableDragging = () => {
      dragging.current = undefined;
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
    };

    const mousemove = (e: MouseEvent) => {
      if (dragging.current === undefined) return;
      // Dragging dialog
      setPosition({
        top: e.clientY - dragging.current.offsetY,
        left: e.clientX - dragging.current.offsetX,
      });
    };

    // To handle mouse events outside of the component, use addEventListener.
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", disableDragging);
    document.addEventListener("dragend", disableDragging);

    return () => {
      document.removeEventListener("mouseup", disableDragging);
      document.removeEventListener("dragend", disableDragging);
      document.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const mouseDown = (e: MouseEventReact<HTMLDivElement>) => {
    if (!refDialog || !refDialog.current) {
      return;
    }

    if (clickedMouse.current) {
      clearTimeout(clickedMouse.current);
      clickedMouse.current = undefined;
    }

    const { clientX, clientY } = e;
    const { top, left } = refDialog.current.getBoundingClientRect();

    clickedMouse.current = setTimeout(() => {
      // Record the distance of the mouse from the dialog top
      // and left after 100msec after clicking.
      // offsetX and offsetY of e are offsets from the parent
      // component. To calculate the distance the dialog moves
      // using the offset from the current mouse location to the
      // top/left of the dialog
      dragging.current = {
        offsetX: clientX - left,
        offsetY: clientY - top,
      };
    }, 100);
  };

  return { mouseDown, refDialog, position } as const;
};

type DraggableProps = Omit<React.JSX.IntrinsicElements["div"], "style"> & {
  children: React.ReactNode;
  startPosition?: {
    top: string;
    left: string;
  };
};

export const Draggable = (props: DraggableProps) => {
  const { mouseDown, position, refDialog } = useDraggable();
  const { className, children, startPosition, ...rest } = props;

  const getPosition = (topOrLeft: "top" | "left") =>
    position
      ? position[topOrLeft]
      : startPosition
        ? startPosition[topOrLeft]
        : "50%";

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      role="dialog"
      onMouseDown={mouseDown}
      className={[
        styles.draggable({ isDragging: position ? true : false }),
        className,
      ].join(" ")}
      style={{
        top: getPosition("top"),
        left: getPosition("left"),
      }}
      ref={refDialog}
      {...rest}
    >
      {children}
    </div>
  );
};
