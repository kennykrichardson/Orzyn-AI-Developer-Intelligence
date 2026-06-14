def calculate_productivity(
    commit_count: int,
    pull_request_count: int,
):
    return round(
        (commit_count * 0.7)
        + (pull_request_count * 1.3),
        2,
    )