/* This file include code related to github api */
const api = "https://api.github.com/repos/Parasdeveloper8/Laboratory/issues";

//function to fetch data
async function fetchIssues(){
    try {
        const response = await fetch(api);
        const issues = await response.json();
        let issueCount = 0;
        const issueList = document.getElementById("issues");
        issueList.innerHTML = ""; // Clear previous issues
        issues.forEach(issue => {
            issueCount++;
        });
        const li = document.createElement("li");
        li.innerHTML = `<b>Total Issues</b> : <b>${issueCount}</b>`;
        issueList.appendChild(li);
    } catch (error) {
        console.error("Error fetching issues:", error);
    }
}

fetchIssues();
