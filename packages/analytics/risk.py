def calculate_risk(
    bus_factor: float,
):
    """
    Risk Score (0-100)
    Lower is better.
    """

    if bus_factor <= 1:
        return 60

    if bus_factor <= 2:
        return 45

    if bus_factor <= 3:
        return 35

    if bus_factor <= 5:
        return 25

    if bus_factor <= 8:
        return 15

    return 10