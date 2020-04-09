import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import projectsApi from './services/projectsApi';


export default function App() {

    const[projects, setProjects] = useState([]);

    useEffect(()=> {
        projectsApi.get('/projects')
        .then((response) => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        const response = await projectsApi.post('/projects', {
            title: `Dog whispering ${Date.now()}`,
            owner: "Don Bob"
        });
        setProjects([...projects, response.data]);
        
    }

    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={projects} 
                keyExtractor={project => project.id} 
                renderItem={({item:project}) => (
                    <>
                        <Text style={styles.project} key={project.id}>{project.title}</Text>

                    </>
                    )}/>
            </SafeAreaView>
            {/*<ScrollView style={styles.container}>
                {projects.map((project) => (
                    <Text style={styles.project} key={project.id}>{project.title}</Text>
                ))}
                </ScrollView>*/}
            <TouchableOpacity activeOpacity={0.5} style={styles.button} onPress={handleAddProject}>
                <Text style={styles.buttonText}>Add Project</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#7159c1'
   },
   project: {
        color: '#FFF',
        fontSize: 20
   },
   button: {
       backgroundColor: '#fff',
       margin: 20,
       height: 50,
       borderRadius: 4,
       justifyContent: 'center',
       alignItems: 'center'
   },
   buttonText: {
       fontWeight: 'bold',
       fontSize: 16
   }
});