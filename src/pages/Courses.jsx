import React from "react";
import CoursesBanner from "../components/CoursesBanner";
import Footer from "../components/Footer";
import CTAReusable from "../components/CTAReuseable";
import Courses_banner from "../assets/Courses.png"
import CourseIncludes from "../components/CoursesIncludes";
import CoursesFull from "../components/CoursesFull";
import CoursesMini from "../components/CoursesMini";

export default function Courses() {
  return (
    <>
    <CoursesBanner/>
    <CoursesFull/>
    <CoursesMini/>
    <CourseIncludes/>
      <CTAReusable
            bgImage={Courses_banner}
            titleWhite="Ready to"
            titleYellow="Learn?"
            description="Enroll to access all courses and resources for your homeschooling journey."
          />
    <Footer/>
    </>
  );
}