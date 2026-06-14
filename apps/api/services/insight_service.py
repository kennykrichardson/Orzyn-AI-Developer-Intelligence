from packages.analytics.insights import (
    generate_insights,
)

from apps.api.services.trend_service import (
    get_repository_trends,
)

from apps.api.services.github_service import (
    analyze_repository,
)

from apps.api.services.analytics_service import (
    calculate_repository_metrics,
)


def get_repository_insights(
    owner: str,
    repo_name: str,
):
    repository = analyze_repository(
        owner,
        repo_name,
    )

    analytics = (
        calculate_repository_metrics(
            repository
        )
    )

    trends = (
        get_repository_trends(
            owner,
            repo_name,
        )
    )

    insights = (
        generate_insights(
            analytics.model_dump(),
            trends,
        )
    )

    return {
        "repository": repository.name,
        "insights": insights,
    }