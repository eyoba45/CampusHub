import { Button } from "@workspace/ui/components/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 text-foreground">
      {/* Floating Top Bar */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-background/70 border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight">
              CampusHub
            </h1>
            <p className="text-xs text-muted-foreground">
              Your intelligent student workspace
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full">
              Explore
            </Button>
            <Button className="rounded-full">New Task</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-10 max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Good evening, Eyob 👋
          </h2>
          <p className="text-muted-foreground mt-2">
            Here’s what’s happening with your workspace today.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Projects",
              value: "04",
              desc: "Active builds",
            },
            {
              title: "Tasks",
              value: "12",
              desc: "Pending actions",
            },
            {
              title: "Progress",
              value: "76%",
              desc: "Overall completion",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border bg-background/60 p-5 hover:shadow-md transition"
            >
              <p className="text-xs text-muted-foreground">{item.title}</p>
              <h3 className="text-3xl font-semibold mt-2 group-hover:scale-105 transition">
                {item.value}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          {/* Activity Feed */}
          <div className="rounded-2xl border p-6 bg-background/60">
            <h3 className="font-semibold">Recent Activity</h3>

            <div className="mt-4 space-y-3">
              {[
                "You created 'AI Study Planner'",
                "Task completed: Database setup",
                "New message from team",
              ].map((text, i) => (
                <div
                  key={i}
                  className="text-sm text-muted-foreground flex gap-2"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border p-6 bg-background/60 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold">Quick Actions</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Start building instantly
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <Button className="w-full">Create Project</Button>
              <Button variant="outline" className="w-full">
                View Tasks
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Insight Panel */}
        <div className="mt-8 rounded-2xl border p-6 bg-gradient-to-r from-muted/40 to-background">
          <h3 className="font-semibold">Insight</h3>
          <p className="text-sm text-muted-foreground mt-2">
            You’re most productive between 10:00 - 13:00. Consider scheduling
            deep work sessions in that window.
          </p>
        </div>
      </main>
    </div>
  )
}