import {
  measurements,
  history,
  thermodynamics,
  quantum,
  dashboard,
  course,
  live,
  exam,
  pastquestion,
  message,
} from "../Images";

export const sidebarRoutes = [
  {
    icon: dashboard,
    path: "/",
    name: "Dashboard",
  },
  {
    icon: course,
    path: "/course",
    name: "Course",
  },
  {
    icon: live,
    path: "/live",
    name: "Live Class",
  },
  {
    icon: exam,
    path: "/assesments",
    class: "Assesments",
  },
  {
    icon: pastquestion,
    path: "/questions",
    name: "GCE questions",
  },
  {
    icon: message,
    path: "/forum",
    name: "Forum",
  },
];

export const courses = [
  {
    courname: "Mathematics",
    by: "Fru Mark",
  },
  {
    courname: "Physics",
    by: "Fru Mark",
  },
  {
    courname: "Computer Science",
    by: "Fru Mark",
  },
  {
    courname: "Biology",
    by: "Fru Mark",
  },
  {
    courname: "Chemistry",
    by: "Fru Mark",
  },
];

export const courseRoutes = [
  {
    name: "All Courses",
  },
  {
    name: "The newest",
  },
  {
    name: "Top rated",
  },
  {
    name: "Most Popular",
  },
];

export const mapFile = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
  ],
};

export const multipleCourses = [
  {
    name: "Maths: Algebra",
    thumbnail: quantum,
    rating: 3.5,
  },
  {
    name: "Physics: Thermodynamics",
    thumbnail: thermodynamics,

    rating: 3.5,
  },
  {
    name: "Computer Sc: Algorithm",
    thumbnail: measurements,
    rating: 3.5,
  },
  {
    name: "Chemistry: Mole Concept",
    thumbnail: history,
    rating: 3.5,
  },
];
