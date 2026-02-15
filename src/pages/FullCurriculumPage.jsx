import { Link, useNavigate } from "react-router-dom";

const curriculum = [
  {
    title: "Critical Thinking Labs",
    desc: "Students engage in logic puzzles, real-world problem solving, debates, and analytical reasoning activities that strengthen independent thinking and decision-making skills.",
    image: "/lab-activities.jpg",
  },
  {
    title: "STEM Explorations",
    desc: "Hands-on experiments, scientific observations, and curiosity-driven discovery help children understand science, technology, engineering, and mathematics practically.",
    image: "/STEM-exploration.jpg",
  },
  {
    title: "Creative Expression",
    desc: "Through music, art, drama, and storytelling, children explore creativity, emotional expression, and imagination in a structured yet free environment.",
    image: "/creative-art.jpg",
  },
  {
    title: "Physical Development",
    desc: "Structured physical activities enhance coordination, strength, balance, teamwork, and overall confidence while promoting a healthy lifestyle.",
    image: "/Physical-Development.jpg",
  },
  {
    title: "Technology & Robotics",
    desc: "Early exposure to robotics, logic-building tools, and digital creativity helps children understand technology as a problem-solving tool.",
    image: "/Technology.jpg",
  },
  {
    title: "Life Skills & Empathy",
    desc: "Children develop leadership, collaboration, emotional intelligence, empathy, and communication skills essential for real-life success.",
    image: "/life-skills.jpg",
  },
];

const FullCurriculumPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#fde68a,_transparent_60%)] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl">
          <span className="inline-block bg-yellow-100 px-4 py-1 rounded-full text-sm font-medium">
            Our Curriculum Philosophy
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-black leading-tight">
            A Curriculum Designed for
            <span className="text-yellow-500"> Real Growth</span>
          </h1>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Our curriculum is not confined to classrooms or textbooks. It is a
            thoughtfully structured journey that nurtures intellectual,
            emotional, physical, and social development at every stage.
          </p>
        </div>

        {/* Curriculum Sections */}
        <div className="mt-20 space-y-20">
          {curriculum.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-14`}
              >
                {/* Image */}
                <div className="relative w-56 h-56 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-2xl" />

                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative w-full h-full rounded-full object-cover ring-4 ring-white shadow-xl"
                  />
                </div>

                {/* Content */}
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-semibold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <Link
            to="/contact"
            onClick={() => navigate("/contact")}
            className="px-14 py-4 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition"
          >
            Talk to Us About Admissions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullCurriculumPage;
