import React, { useState, useEffect } from 'react';
import projectsApi from './services/projectsApi';
import Header from './components/Header';
import './App.css';

function App() {

    const [projects, setProjects] = useState([]);

    useEffect(() =>  {
        projectsApi.get('/projects').then(({data}) => {
            setProjects([...data]);
            
        });
    }, []);

    async function handleAddProject() {
        const response = await projectsApi.post("/projects", {
            title: `New Project ${Date.now()}`,
            owner: "Mary BB"
        })
        setProjects([...projects, response.data]);
        
    }

    return (
        <>
            <Header title="Projects"/>
            <ul>
                {projects.map(project => <li key={project.id}>{`${project.id} - ${project.title}`}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar</button>
        </>
    );
}

export default App;