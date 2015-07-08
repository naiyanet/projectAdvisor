/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import th.co.geniustree.intenship.advisor.model.Parent;
import th.co.geniustree.intenship.advisor.repo.ParentRepo;

/**
 *
 * @author User
 */
@RestController
public class ParentController {
    @Autowired
    private ParentRepo parentRepo;
    
    @RequestMapping(value = "/parent", method = RequestMethod.GET)
    public Page<Parent> getParent(Pageable pageable){
        return parentRepo.findAll(pageable);
    } 
    @RequestMapping(value = "/saveParent", method = RequestMethod.POST)
    public void saveParent(@Validated @RequestBody Parent parent){
        parentRepo.save(parent);
    }
    @RequestMapping(value = "/deleteParent", method = RequestMethod.POST)
    public void deleteParent(@RequestBody Parent parent){
        parentRepo.delete(parent.getId());
    }
    @RequestMapping(value = "/parent/search", method = RequestMethod.POST)
    public Page<Parent> searchParent(@RequestBody String keyword, Pageable pageable) {
        return parentRepo.findByNameOrEmail(keyword, keyword, pageable);
    }
}
