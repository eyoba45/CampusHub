import { Button } from "@workspace/ui/components/button"

export default function Page() {
  const courses = [
    {
      title: "Web Development",
      description: "Learn React, Next.js, and modern web technologies.",
    },
    {
      title: "Machine Learning",
      description: "Build intelligent systems using Python and AI.",
    },
    {
      title: "Blockchain",
      description: "Master smart contracts and decentralized applications.",
    },
  ]

  const events = [
    "Hackathon 2026",
    "AI Workshop",
    "Startup Pitch Competition",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="rounded-full border px-4 py-2 text-sm">
            🚀 CampusHub Platform
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Connect.
            <br />
            Learn.
            <br />
            Build Your Future.
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
            A modern platform where students discover courses, join events,
            collaborate with communities, and grow their careers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button>Get Started</Button>
            <Button variant="outline">Explore Courses</Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
        <div className="rounded-2xl border p-6">
          <h3 className="text-3xl font-bold">5K+</h3>
          <p className="text-muted-foreground">Students</p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-muted-foreground">Courses</p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-muted-foreground">Events</p>
        </div>

        <div className="rounded-2xl border p-6">
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-muted-foreground">Communities</p>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">Featured Courses</h2>
          <p className="text-muted-foreground mt-4">
            Discover trending learning paths.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="hover:border-primary rounded-2xl border p-6 transition-all"
            >
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-muted-foreground mt-3">
                {course.description}
              </p>

              <Button className="mt-6">View Course</Button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Upcoming Events
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <div
                key={event}
                className="rounded-2xl border bg-background p-6"
              >
                <h3 className="text-xl font-semibold">{event}</h3>

                <p className="text-muted-foreground mt-3">
                  Join students from different departments and expand your
                  network.
                </p>

                <Button className="mt-6">Register</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Join Student Communities
          </h2>

          <p className="text-muted-foreground mt-4">
            Meet like-minded students and collaborate on exciting projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border p-8">
            <h3 className="text-xl font-semibold">💻 Coding Club</h3>
            <p className="text-muted-foreground mt-3">
              Build projects and prepare for hackathons.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="text-xl font-semibold">🤖 AI Society</h3>
            <p className="text-muted-foreground mt-3">
              Learn machine learning and artificial intelligence.
            </p>
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="text-xl font-semibold">🚀 Startup Hub</h3>
            <p className="text-muted-foreground mt-3">
              Connect with entrepreneurs and innovators.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border p-12 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Start Your Journey?
          </h2>

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Discover opportunities, connect with students, and unlock your
            potential through CampusHub.
          </p>

          <Button className="mt-8">
            Join CampusHub Today
          </Button>
        </div>
      </section>
    </main>
  )
}