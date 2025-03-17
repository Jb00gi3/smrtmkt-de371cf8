
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Clipboard, Download, Trash2 } from "lucide-react";

interface StoredEmail {
  email: string;
  source: string;
  timestamp: string;
}

export function EmailAdmin() {
  const [emails, setEmails] = useState<StoredEmail[]>([]);
  
  // Load emails from localStorage when component mounts
  useEffect(() => {
    const storedEmails = JSON.parse(localStorage.getItem('capturedEmails') || '[]');
    setEmails(storedEmails);
  }, []);
  
  // Copy emails to clipboard as CSV
  const copyToClipboard = () => {
    if (emails.length === 0) {
      toast({
        title: "No emails",
        description: "There are no emails to copy.",
        variant: "destructive",
      });
      return;
    }
    
    const csvContent = [
      "Email,Source,Timestamp",
      ...emails.map(entry => `${entry.email},${entry.source},${entry.timestamp}`)
    ].join('\n');
    
    navigator.clipboard.writeText(csvContent)
      .then(() => {
        toast({
          title: "Copied!",
          description: `${emails.length} emails copied to clipboard as CSV.`,
        });
      })
      .catch(err => {
        console.error('Error copying to clipboard:', err);
        toast({
          title: "Error",
          description: "Failed to copy to clipboard.",
          variant: "destructive",
        });
      });
  };
  
  // Download emails as CSV file
  const downloadCSV = () => {
    if (emails.length === 0) {
      toast({
        title: "No emails",
        description: "There are no emails to download.",
        variant: "destructive",
      });
      return;
    }
    
    const csvContent = [
      "Email,Source,Timestamp",
      ...emails.map(entry => `${entry.email},${entry.source},${entry.timestamp}`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `captured-emails-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Downloaded!",
      description: `${emails.length} emails downloaded as CSV.`,
    });
  };
  
  // Clear all stored emails
  const clearEmails = () => {
    if (confirm("Are you sure you want to delete all stored emails? This action cannot be undone.")) {
      localStorage.removeItem('capturedEmails');
      setEmails([]);
      toast({
        title: "Cleared",
        description: "All stored emails have been removed.",
      });
    }
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Captured Emails ({emails.length})</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              <Clipboard className="h-4 w-4 mr-2" />
              Copy as CSV
            </Button>
            <Button variant="outline" size="sm" onClick={downloadCSV}>
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
            <Button variant="destructive" size="sm" onClick={clearEmails}>
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {emails.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">No emails captured yet.</p>
        ) : (
          <div className="border rounded-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Source</th>
                  <th className="px-4 py-2 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((entry, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{entry.email}</td>
                    <td className="px-4 py-2">{entry.source}</td>
                    <td className="px-4 py-2">{new Date(entry.timestamp).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
