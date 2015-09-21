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
import th.co.geniustree.intenship.advisor.model.GroupEmail;
import th.co.geniustree.intenship.advisor.repo.GroupEmailRepo;

/**
 *
 * @author User
 */
@RestController
public class GroupEmailController {
    @Autowired
    private GroupEmailRepo groupEmailRepo;
    
    @RequestMapping(value = "/getgroupemail",method = RequestMethod.GET)
    public Page<GroupEmail> getGroupEmail(Pageable pageable){
        return groupEmailRepo.findAll(pageable);
    }
    
    @RequestMapping(value = "/savegroupemail",method = RequestMethod.POST)
    public void saveGroupEmail(@Validated @RequestBody GroupEmail groupEmail){
        groupEmailRepo.save(groupEmail);
    }
    
    @RequestMapping(value = "/deletegroupemail",method = RequestMethod.POST)
    public void deleteGroupEmail(@RequestBody GroupEmail groupEmail){
        groupEmailRepo.delete(groupEmail);
    }
}
