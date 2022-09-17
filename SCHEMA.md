# LEAGUE

- name
- rule
- playersAmount (min=2, max?)
- subscription
- champion

# KEY?

- order
- name?
- leagueID
- amount (min=1)

# PHASE

- order
- name?
- KeyID?
- LeagueID
- amount (min=1)
- matchAmount (min=1)
- isPlayOffs (false)
- playerKickAmount (if playersAmount <= 1) => error

# MATCH

- gameID
- phaseID
- isAvailable

# PLAYER

- user [ ]
- leagueID
- score
- isAlive (true)

# PREDICT

- matchID
- playerID
- homeScore
- awayScore
- isAvaliable

# TABLE

- Players [ ]
