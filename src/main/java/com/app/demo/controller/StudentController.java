package com.app.demo.controller;

import com.app.demo.models.Student;
import com.app.demo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.app.demo.repository.StudentRepo;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {


    @Autowired
    public StudentService studentService;
    public StudentController (StudentService studentService){
        this.studentService=studentService;
    }

    @GetMapping("/allStudentsName")
    public List<String> allStudents(){
        return studentService.allStudentsName();
    }

    @GetMapping("/getAllStudents")
    public Iterable<Student> getStudent() {
        return studentService.getStudent();
    }

    @PostMapping("/saveStudent")
    public void saveStudent(@RequestBody Student student){
       studentService.insertStudent(student);

    }

}


