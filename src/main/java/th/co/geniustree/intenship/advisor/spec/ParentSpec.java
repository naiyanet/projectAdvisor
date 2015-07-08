/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package th.co.geniustree.intenship.advisor.spec;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;
import th.co.geniustree.intenship.advisor.model.Parent;
import th.co.geniustree.intenship.advisor.model.Parent_;

/**
 *
 * @author User
 */
public class ParentSpec {
      public static Specification<Parent> likeName(final String keyword) {
        return new Specification<Parent>() {

            @Override
            public Predicate toPredicate(Root<Parent> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
                return cb.like(cb.upper(root.get(Parent_.name)), keyword.toUpperCase());
            }
        };
    }

public static Specification<Parent> likeEmail(final String keyword) {
        return new Specification<Parent>() {

            @Override
            public Predicate toPredicate(Root<Parent> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
                return cb.like(cb.upper(root.get(Parent_.email)), keyword.toUpperCase());
            }
        };
    }
}
