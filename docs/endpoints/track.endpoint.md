```
HTTP Метод	URL	Body	Response

GET	/api/tracks	—	TrackEntity[]
GET	/api/tracks/:slug	—	TrackDetail

POST	/api/tracks	CreateTrackDto	TrackEntity
PATCH	/api/tracks/:id	UpdateTrackDto	TrackEntity
DELETE	/api/tracks/:id	—	void (204)

POST	/api/tracks/:trackId/steps	CreateTrackStepDto	TrackStepEntity
PATCH	/api/tracks/steps/:id	UpdateTrackStepDto	TrackStepEntity
DELETE	/api/tracks/steps/:id	—	void (204)

POST	/api/tracks/solutions/commit	CommitSolutionDto	UserStepSolutionEntity

```
