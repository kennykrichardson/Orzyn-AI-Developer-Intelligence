def calculate_risk(
    bus_factor: float,
):
    """
    Risk Score (0-100)

    Higher = More Risk
    """

    if bus_factor <= 1:
        return 90

    if bus_factor <= 2:
        return 75

    if bus_factor <= 3:
        return 60

    if bus_factor <= 5:
        return 40

    if bus_factor <= 8:
        return 25

    return 10