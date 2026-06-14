def calculate_velocity(
    commit_count: int,
    contributor_count: int,
):
    if contributor_count == 0:
        return 0

    return round(
        commit_count / contributor_count,
        2,
    )