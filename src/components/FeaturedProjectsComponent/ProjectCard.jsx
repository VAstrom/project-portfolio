import repoImages from "../../repoImages.json";
import { v4 as uuidv4 } from 'uuid';
import { TagComponent } from "../TagComponent";
import { ProjectHeadline } from "./ProjectHeadline";
import { ButtonComponent } from "./ButtonComponent";
import { Textbox } from "../Textbox";

export const ProjectCard = ({ repo }) => {
  // Find the corresponding image for the repo
  const repoImage = repoImages.find((img) => img.repoName === repo.name);

  return (
    <div className="project-card">
      <img
        src={repoImage?.imageUrl}
        alt={repo.name}
        className="project-card-image"
      />
      <div className="project-info-wrapper">
        <ProjectHeadline projectTitle={repo.name} />
        <Textbox text={repo.description} />
        <div className="project-tags">
          {repo.topics.map((topic) => {
            const key = uuidv4();  // Generate a unique key
            console.log('Key for tag:', key);
            return <TagComponent key={key} tag={topic.toUpperCase()} />;
          })}
        </div>
      </div>
      <div className="button-wrapper">
        <ButtonComponent
          repoURL={repo.html_url}
          deployedSite={repo.homepage}
        />
      </div>
    </div>
  );
};


/* Explanation:
 UUIDs are universally unique identifiers.

The find() method in JavaScript is used to search for the first element in an array that satisfies a provided testing function. 
(img) => img.repoName === repo.name: This is an arrow function, a callback passed to find(). For each element (img) in repoImages, 
it checks if the repoName of that element matches the repo.name.

The find() method will return the first element in repoImages for which the callback function returns true (i.e., where img.repoName === repo.name is true).
src={repoImage?.imageUrl}: This sets the src attribute of the <img> element to the imageUrl property of the repoImage object. The repoImage object is obtained from the JSON data based on the repository name. The ?. is the optional chaining operator, which allows the imageUrl to be accessed if repoImage is not null or undefined. If repoImage is null or undefined, it prevents a potential error by not trying to access the imageUrl property. If repoImage is null or undefined, the src attribute will not be applied, and the <img> element will not display any image. The alternative text specified by the alt attribute (repo.name) will be shown instead of the image.

*/

