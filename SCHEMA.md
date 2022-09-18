# LEAGUE

- name
- playerAmount (min=2, max=?)
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

# PHASE

- order
- name?
- KeyID?
- LeagueID
- matchAmount (min=1)
- isPlayOffs (false)
- playerKickAmount (if playersAmount <= 1) => error
- isAvailable (false)

# MATCH

- gameID
- phaseID
- isAvailable (false)

# PLAYER

- userID
- leagueID
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

# TABLE

- champID?
- phaseID?
- Players [ ]
