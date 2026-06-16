def calculate_health_score(
    productivity_score: float,
    velocity_score: float,
    bus_factor: float,
    risk_score: float,
):
    """
    Health Score (0-100)

    Higher = Healthier Repository
    """

    bus_factor_score = min(
        bus_factor * 20,
        100,
    )

    health_score = (
        productivity_score * 0.35
        + velocity_score * 0.25
        + bus_factor_score * 0.20
        + (100 - risk_score) * 0.20
    )

    return round(
        health_score,
        2,
    )