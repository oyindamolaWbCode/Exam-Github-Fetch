const Result = (props) => {
    const { repos } = props;

    const repositoryList = repos.length !== 0 ?(
        repos.map((repo) => (
            <ul key={repo.id}>
                <li>
                    Repository Name:{" "}
                    <a href={repo.html_url}>
                        {repo.name}
                    </a>
                </li>
                <li>Language: {repo.language}</li>
                <li>Visibility: {repo.Visibility}</li>
                <li>ID: {repo.id}</li>
            </ul>
       
        ))
    ):(
        <p>Loading...</p>
    )
    return ( 
        <ul>
            <li>{repositoryList}</li>
        </ul>

     );
}
 
export default Result;