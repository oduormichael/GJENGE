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
      <ResizablePanel defaultSize={25}>
        <div className="p-6">
          <span className="font-semibold">{sidebar}</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="p-6">
          <span className="font-semibold">{main}</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
