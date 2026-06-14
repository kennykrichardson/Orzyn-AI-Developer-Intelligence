from packages.ai.report_generator import (
    generate_report,
)


def create_ai_report(
    repository_data: dict,
):
    return generate_report(
        repository_data
    )