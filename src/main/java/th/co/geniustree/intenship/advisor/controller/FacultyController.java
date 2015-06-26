/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Faculty;
import th.co.geniustree.intenship.advisor.repo.FacultyRepo;

/**
 *
 * @author User
 */
@RestController
public class FacultyController {
    @Autowired
    private FacultyRepo facultyRepo;
    
    @RequestMapping(value = "/facultys")
    public Page<Faculty> getFaculty(Pageable pageable){
        return facultyRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/facultys")
    public void saveFaculty(@RequestBody Faculty faculty){
        facultyRepo.save(faculty);
    }
    
    @RequestMapping(value = "/facultyss")
    public void deleteFaculty(@RequestBody Faculty faculty){
        facultyRepo.delete(faculty.getId());
    }
}
