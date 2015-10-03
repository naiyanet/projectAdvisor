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
import th.co.geniustree.intenship.advisor.model.AddUser;
import th.co.geniustree.intenship.advisor.repo.AddUserRepo;

/**
 *
 * @author User
 */
@RestController
public class AddUserController {
    @Autowired
    private AddUserRepo addUserRepo;
    
    @RequestMapping(value = "/getadduser",method = RequestMethod.GET)
    public Page<AddUser> getAddUser(Pageable pageable){
        return addUserRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/saveadduser",method = RequestMethod.POST)
    public void saveAddUser(@Validated @RequestBody AddUser addUser){
        addUserRepo.save(addUser);
    }
    
    @RequestMapping(value = "/deleteadduser",method = RequestMethod.POST)
    public void deleteAddUser(@RequestBody AddUser addUser){
        addUserRepo.delete(addUser);
    }
}
