# LEAGUE

- name
- playersAccepted (0)
- playersAmount (min=2, max=?)
- keysAmount (min=1, max=?)
- phasesAmount (min=1, max=?)
- matchesAmount
- subscription (0)
- champion [Player]
- isPrivate (false)

# KEY

- order
- name?
- leagueID
- playersAmount
- Players [ ]

# PHASE

- order
- name?
- KeyID
- Table [ ]
- LeagueID
- matchAmount (min=1)
- fullMatches (0)
- isPlayOffs (false)
- playerKickAmount (0)
- isAvailable (true)

# MATCH

- gameID
- keyID
- phaseID
- isAvailable (true)

# PLAYER

- userID
- leagueID
- keyID
- score (0)
- isAlive (true)

# PREDICT

- matchID
- playerID
- phaseID
- homeScore
- awayScore
- isAvaliable (true)
- isVisible (false)
- score

`Checar se o player está na liga`

# TABLE

- leagueID?
- phaseID
- Players [ ]
