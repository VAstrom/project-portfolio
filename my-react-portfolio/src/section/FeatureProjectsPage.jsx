import { useState, useEffect } from "react";
import { FeaturedProjects } from "../components/FeaturedProjectsComponent/FeaturedProjects";
import { Headline } from "../components/Headline"

export const FeatureProjectsPage = () => {

    let headerText = "Featured Projects";

    const [repos, setRepos] = useState([]);
    const githubUsername = 'VAstrom'; // Replace with the desired GitHub username
    const maxReposToShow = 8; // Set the maximum number of repositories to display
  // IMPORTANT!!! added .slice(2) since my github repo for the group projects gets included in the portfolio. Once I have removed the group project/made it private I should remove this!


    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc`);

                if (response.ok) {
                    const data = await response.json();
                    const filteredRepos = data.slice(2, maxReposToShow); // Filter the repositories
                    setRepos(filteredRepos);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchData();
        console.log(repos);
    }, [githubUsername, maxReposToShow]);


    return (
        <div className="featured-page-wrapper">
            <Headline headerText={headerText} />
            <FeaturedProjects
                repos={repos}
            />
        </div>
    )
}