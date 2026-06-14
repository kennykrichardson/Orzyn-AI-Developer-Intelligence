import os

from github import Github
from dotenv import load_dotenv

load_dotenv()

GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

if not GITHUB_TOKEN:
    raise ValueError(
        "GITHUB_TOKEN not found in environment variables."
    )

github_client = Github(GITHUB_TOKEN)


def get_repository(owner: str, repo_name: str):
    """
    Example:
    owner = "facebook"
    repo_name = "react"
    """
    return github_client.get_repo(
        f"{owner}/{repo_name}"
    )


def get_repository_details(
    owner: str,
    repo_name: str,
):
    repo = get_repository(
        owner,
        repo_name,
    )

    return {
        "name": repo.name,
        "owner": repo.owner.login,
        "url": repo.html_url,
        "stars": repo.stargazers_count,
        "forks": repo.forks_count,
        "open_issues": repo.open_issues_count,
        "language": repo.language,
    }