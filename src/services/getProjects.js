import { projects } from "../projects/projects.json";

export const getProjects = () => {
    return projects;
}

export const getProject = (name) => {
    return projects.find(project => project.name === name);
}

export const getSixProjects = () => {
    return projects.slice(0, 6);
}

export const getProjectsByCategory = (category) => {
    console.log(projects.category);
    return projects.filter(project => project.category === category);
}