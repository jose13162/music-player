import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { styled } from "../stitches.config";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Container = styled("div", {
  height: "100%",
  width: "100%",
  position: "relative",
});

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  position: "absolute !important",
  inset: 0,
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  width: 10,
  display: "flex",
  userSelect: "none",
  touchAction: "none",
  padding: 2,
  transition: "background 160ms ease-out",
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  borderRadius: 10,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

export function ScrollArea(props: IProps) {
  return (
    <Container>
      <StyledScrollArea>
        <StyledViewport>{props.children}</StyledViewport>
        <StyledScrollbar orientation="vertical">
          <StyledThumb />
        </StyledScrollbar>
      </StyledScrollArea>
    </Container>
  );
}
