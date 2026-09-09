```
HTTP Метод	URL	Body	Response

GET	/api/courses/:slug	—	CourseSkeleton

GET	/api/courses/lessons/:id	—	LessonDetail

PATCH	/api/courses/lessons/:id/progress	—	ToggleLessonProgressResponse

POST	/api/courses	CreateCourseDto	CourseEntity

PATCH	/api/courses/:id	UpdateCourseDto	CourseEntity

DELETE	/api/courses/:id	—	void (204)

POST	/api/courses/:courseId/lessons	CreateLessonDto	LessonEntity

PATCH	/api/courses/lessons/:id	UpdateLessonDto	LessonEntity

DELETE	/api/courses/lessons/:id	—	void (204)
```
