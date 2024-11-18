import { History, ArrowUpRight, ArrowDownRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data - In a real app, this would come from an API
const historyData = {
  "DOC-001": [
    {
      id: 1,
      action: "Document Uploaded",
      user: "John Smith",
      timestamp: "2024-03-15T10:30:00",
      details: "Initial document upload",
      version: "1.0",
    },
    {
      id: 2,
      action: "Authenticity Verified",
      user: "System",
      timestamp: "2024-03-15T10:31:00",
      details: "Document signature validated",
      version: "1.0",
    },
    {
      id: 3,
      action: "Completeness Check",
      user: "System",
      timestamp: "2024-03-15T10:32:00",
      details: "All required fields verified",
      version: "1.0",
    },
    {
      id: 4,
      action: "Manual Review Started",
      user: "Sarah Johnson",
      timestamp: "2024-03-15T11:15:00",
      details: "Document under review by certification team",
      version: "1.0",
    },
  ],
};

interface DocumentHistoryProps {
  documentId: string;
}

export function DocumentHistory({ documentId }: DocumentHistoryProps) {
  const history = historyData[documentId] || [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Document History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {history.map((event, index) => (
            <div key={event.id} className="relative pl-8">
              {index !== history.length - 1 && (
                <div className="absolute left-[11px] top-[24px] h-full w-px bg-muted" />
              )}
              <div className="absolute left-0 top-1 h-6 w-6 rounded-full border bg-background flex items-center justify-center">
                {event.user === "System" ? (
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{event.action}</p>
                  <span className="text-sm text-muted-foreground">v{event.version}</span>
                </div>
                <p className="text-sm text-muted-foreground">{event.details}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{event.user}</span>
                  <span>·</span>
                  <span>{new Date(event.timestamp).toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}