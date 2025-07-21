import { MoreHorizontal, ArrowUpDown, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const entries = [
  {
    id: "1",
    name: "Website Redesign",
    assignee: {
      name: "Sarah Adams",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=32&h=32&fit=crop&crop=face",
      initials: "SA"
    },
    status: "In Progress",
    priority: "High",
    dueDate: "2025-07-20",
    progress: 75
  },
  {
    id: "2",
    name: "Mobile App Development",
    assignee: {
      name: "Mike Johnson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=face",
      initials: "MJ"
    },
    status: "Review",
    priority: "High",
    dueDate: "2025-07-22",
    progress: 90
  },
  {
    id: "3",
    name: "API Documentation",
    assignee: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
      initials: "EW"
    },
    status: "Completed",
    priority: "Medium",
    dueDate: "2025-07-15",
    progress: 100
  },
  {
    id: "4",
    name: "User Testing",
    assignee: {
      name: "Alex Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
      initials: "AC"
    },
    status: "Planning",
    priority: "Low",
    dueDate: "2025-07-30",
    progress: 25
  },
  {
    id: "5",
    name: "Database Migration",
    assignee: {
      name: "Lisa Brown",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=32&h=32&fit=crop&crop=face",
      initials: "LB"
    },
    status: "In Progress",
    priority: "High",
    dueDate: "2025-07-25",
    progress: 60
  },
  {
    id: "6",
    name: "Security Audit",
    assignee: {
      name: "David Lee",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
      initials: "DL"
    },
    status: "Pending",
    priority: "Medium",
    dueDate: "2025-08-01",
    progress: 10
  }
];

function getStatusBadge(status: string) {
  switch (status) {
    case "Completed":
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
    case "In Progress":
      return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
    case "Review":
      return <Badge className="bg-yellow-100 text-yellow-800">Review</Badge>;
    case "Planning":
      return <Badge className="bg-purple-100 text-purple-800">Planning</Badge>;
    case "Pending":
      return <Badge variant="secondary">Pending</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

function getPriorityBadge(priority: string) {
  switch (priority) {
    case "High":
      return <Badge variant="destructive">High</Badge>;
    case "Medium":
      return <Badge className="bg-yellow-100 text-yellow-800">Medium</Badge>;
    case "Low":
      return <Badge variant="outline">Low</Badge>;
    default:
      return <Badge variant="outline">{priority}</Badge>;
  }
}

export function DataTable() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Project Entries</CardTitle>
            <CardDescription>
              Manage and track all your project entries
            </CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">Add Entry</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0">
                  Project Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0">
                  Status
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>
                <Button variant="ghost" className="h-auto p-0">
                  Due Date
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Progress</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="max-w-[200px]">
                  <div className="truncate">{entry.name}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={entry.assignee.avatar} alt={entry.assignee.name} />
                      <AvatarFallback>{entry.assignee.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{entry.assignee.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {getStatusBadge(entry.status)}
                </TableCell>
                <TableCell>
                  {getPriorityBadge(entry.priority)}
                </TableCell>
                <TableCell>
                  <time className="text-sm text-muted-foreground">
                    {new Date(entry.dueDate).toLocaleDateString()}
                  </time>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${entry.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground min-w-[3ch]">
                      {entry.progress}%
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit entry</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Delete entry
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}