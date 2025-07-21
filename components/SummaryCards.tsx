import { Clock, AlertCircle, CheckCircle, Users2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function SummaryCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Actividad Reciente
          </CardTitle>
          <CardDescription>Últimas actualizaciones de tu equipo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>SA</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm">Sarah completó la revisión de diseño</p>
              <p className="text-xs text-muted-foreground">hace 2 horas</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>MJ</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm">Mike desplegó la versión 2.1.0</p>
              <p className="text-xs text-muted-foreground">hace 4 horas</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm">Emma agregó 3 nuevas tareas</p>
              <p className="text-xs text-muted-foreground">hace 6 horas</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Estado de Proyectos
          </CardTitle>
          <CardDescription>Resumen actual del estado de los proyectos</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">On Track</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              18 projects
            </Badge>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm">At Risk</span>
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              5 projects
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Delayed</span>
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              2 projects
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Completed</span>
            <Badge variant="secondary">
              12 projects
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            Upcoming Deadlines
          </CardTitle>
          <CardDescription>Projects due in the next 7 days</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Website Redesign</span>
              <span className="text-xs text-muted-foreground">Tomorrow</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=24&h=24&fit=crop&crop=face" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=24&h=24&fit=crop&crop=face" />
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
              </div>
              <Badge variant="outline" className="text-xs">
                High Priority
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Mobile App Launch</span>
              <span className="text-xs text-muted-foreground">3 days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face" />
                  <AvatarFallback>EM</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarFallback>+2</AvatarFallback>
                </Avatar>
              </div>
              <Badge variant="outline" className="text-xs">
                Medium Priority
              </Badge>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Q4 Planning</span>
              <span className="text-xs text-muted-foreground">5 days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
              <Badge variant="outline" className="text-xs">
                Low Priority
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}