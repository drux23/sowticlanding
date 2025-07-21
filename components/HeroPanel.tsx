import { TrendingUp, Users, FolderOpen, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts";

const chartData = [
  { name: "Ene", value: 400, projects: 24 },
  { name: "Feb", value: 300, projects: 13 },
  { name: "Mar", value: 200, projects: 18 },
  { name: "Abr", value: 278, projects: 39 },
  { name: "May", value: 189, projects: 48 },
  { name: "Jun", value: 239, projects: 38 },
];

export function HeroPanel() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col space-y-2">
        <h1 className="tracking-tight">¡Bienvenido de vuelta, John!</h1>
        <p className="text-muted-foreground">
          Esto es lo que está pasando con tus proyectos hoy.
        </p>
      </div>

      {/* Achievement Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Proyectos Totales</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">254</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-xs px-1">
                +12%
              </Badge>{" "}
              del mes pasado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Usuarios Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">1,284</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-xs px-1">
                +8%
              </Badge>{" "}
              del mes pasado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Ingresos</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">$12,594</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-xs px-1">
                +25%
              </Badge>{" "}
              del mes pasado
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm">Tareas Completadas</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">89</div>
            <p className="text-xs text-muted-foreground">
              <Badge variant="secondary" className="text-xs px-1">
                +5%
              </Badge>{" "}
              del mes pasado
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Data Visualizations */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resumen de Rendimiento</CardTitle>
            <CardDescription>El rendimiento de tus proyectos en los últimos 6 meses</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="value" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribución de Proyectos</CardTitle>
            <CardDescription>Número de proyectos completados cada mes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="projects" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}