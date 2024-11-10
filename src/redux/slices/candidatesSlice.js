import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    candidateId: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    contactDetails: "123-456-7890",
    skills: ["JavaScript", "React", "CSS"],
    experience: "3 years",
    resumeLink: "/resumes/johndoe.pdf",
  },
  {
    candidateId: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    contactDetails: "987-654-3210",
    skills: ["Python", "Django", "Data Science"],
    experience: "5 years",
    resumeLink: "/resumes/janesmith.pdf",
  },
  {
    candidateId: 3,
    name: "Emily Brown",
    email: "emilyb@example.com",
    contactDetails: "555-345-6789",
    skills: ["JavaScript", "Node.js", "GraphQL"],
    experience: "4 years",
    resumeLink: "/resumes/emilybrown.pdf",
  },
  {
    candidateId: 4,
    name: "Michael Johnson",
    email: "michaelj@example.com",
    contactDetails: "555-456-7891",
    skills: ["React", "HTML", "CSS"],
    experience: "2 years",
    resumeLink: "/resumes/michaeljohnson.pdf",
  },
  {
    candidateId: 5,
    name: "Sarah Lee",
    email: "sarahlee@example.com",
    contactDetails: "555-567-8901",
    skills: ["Java", "Spring Boot", "SQL"],
    experience: "6 years",
    resumeLink: "/resumes/sarahlee.pdf",
  },
  {
    candidateId: 6,
    name: "David King",
    email: "davidk@example.com",
    contactDetails: "555-678-9012",
    skills: ["Ruby on Rails", "HTML", "CSS"],
    experience: "5 years",
    resumeLink: "/resumes/davidking.pdf",
  },
  {
    candidateId: 7,
    name: "Olivia Harris",
    email: "oliviah@example.com",
    contactDetails: "555-789-0123",
    skills: ["C#", ".NET", "SQL"],
    experience: "4 years",
    resumeLink: "/resumes/oliviaharris.pdf",
  },
  {
    candidateId: 8,
    name: "Daniel Clark",
    email: "danielc@example.com",
    contactDetails: "555-890-1234",
    skills: ["Angular", "TypeScript", "RxJS"],
    experience: "3 years",
    resumeLink: "/resumes/danielclark.pdf",
  },
  {
    candidateId: 9,
    name: "Ava Turner",
    email: "avat@example.com",
    contactDetails: "555-901-2345",
    skills: ["Go", "Microservices", "Docker"],
    experience: "7 years",
    resumeLink: "/resumes/avaturner.pdf",
  },
  {
    candidateId: 10,
    name: "Lucas Scott",
    email: "lucass@example.com",
    contactDetails: "555-234-5678",
    skills: ["Swift", "iOS Development", "Objective-C"],
    experience: "4 years",
    resumeLink: "/resumes/lucasscott.pdf",
  },
  {
    candidateId: 11,
    name: "Sophia Adams",
    email: "sophiaa@example.com",
    contactDetails: "555-345-6780",
    skills: ["PHP", "Laravel", "MySQL"],
    experience: "4 years",
    resumeLink: "/resumes/sophiaadams.pdf",
  },
  {
    candidateId: 12,
    name: "Ethan Walker",
    email: "ethanw@example.com",
    contactDetails: "555-456-7892",
    skills: ["JavaScript", "Vue.js", "CSS"],
    experience: "2 years",
    resumeLink: "/resumes/ethanwalker.pdf",
  },
  {
    candidateId: 13,
    name: "Isabella Martinez",
    email: "isabellam@example.com",
    contactDetails: "555-567-8902",
    skills: ["Ruby", "Ruby on Rails", "SQL"],
    experience: "3 years",
    resumeLink: "/resumes/isabellamartinez.pdf",
  },
  {
    candidateId: 14,
    name: "James Miller",
    email: "jamesm@example.com",
    contactDetails: "555-678-9013",
    skills: ["C++", "Algorithms", "Data Structures"],
    experience: "5 years",
    resumeLink: "/resumes/jamesmiller.pdf",
  },
  {
    candidateId: 15,
    name: "Charlotte Wilson",
    email: "charlottew@example.com",
    contactDetails: "555-789-0124",
    skills: ["Java", "Spring Boot", "Cloud Computing"],
    experience: "3 years",
    resumeLink: "/resumes/charlottewilson.pdf",
  },
  {
    candidateId: 16,
    name: "Liam Lewis",
    email: "liaml@example.com",
    contactDetails: "555-890-1235",
    skills: ["Kotlin", "Android Development", "Firebase"],
    experience: "2 years",
    resumeLink: "/resumes/liamlewis.pdf",
  },
  {
    candidateId: 17,
    name: "Grace Hall",
    email: "graceh@example.com",
    contactDetails: "555-901-2346",
    skills: ["JavaScript", "React Native", "Node.js"],
    experience: "4 years",
    resumeLink: "/resumes/gracehall.pdf",
  },
  {
    candidateId: 18,
    name: "Benjamin Allen",
    email: "benjamin@example.com",
    contactDetails: "555-234-5679",
    skills: ["PHP", "WordPress", "MySQL"],
    experience: "6 years",
    resumeLink: "/resumes/benjaminallen.pdf",
  },
  {
    candidateId: 19,
    name: "Zoe Scott",
    email: "zoes@example.com",
    contactDetails: "555-345-6781",
    skills: ["Node.js", "Express", "MongoDB"],
    experience: "3 years",
    resumeLink: "/resumes/zoescott.pdf",
  },
  {
    candidateId: 20,
    name: "Mason Young",
    email: "masony@example.com",
    contactDetails: "555-456-7893",
    skills: ["Java", "Spring Boot", "Kubernetes"],
    experience: "5 years",
    resumeLink: "/resumes/masonyoung.pdf",
  },
];

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {},
});

export default candidatesSlice.reducer;
