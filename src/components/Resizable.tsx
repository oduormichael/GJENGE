import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import * as React from "react"

export function Resizable({ sidebar, main }) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen overflow-auto"
    >
      <ResizablePanel defaultSize={15}>
        <div className="p-6 h-full">
          {sidebar}
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        <div className="p-6">
          <span className="font-semibold">{main}</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
