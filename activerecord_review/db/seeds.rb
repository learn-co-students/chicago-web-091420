teacher1 = Teacher.create(name: "Louis")
teacher1 << Student.create(name: "max", cohort: "cohort 1")
teacher1 << Student.create(name: "sam", cohort: "cohort 1")
teacher1 << Student.create(name: "joe", cohort: "cohort 1")
teacher1 << Student.create(name: "sally", cohort: "cohort 1")
teacher1 << Student.create(name: "aj", cohort: "cohort 1")
teacher1 << Student.create(name: "mark", cohort: "cohort 1")


teacher1.students << student_1

Lesson.create(teacher: teacher1, student: student_1)
Lesson.create(teacher: teacher1, student: student_2)
Lesson.create(teacher: teacher1, student: student_3)

