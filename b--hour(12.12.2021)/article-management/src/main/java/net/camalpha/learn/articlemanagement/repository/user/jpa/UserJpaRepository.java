package net.camalpha.learn.articlemanagement.repository.user.jpa;

import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * User JPA Repository
 * @author tang.leanghour
 */
@Repository
public interface UserJpaRepository extends JpaRepository<UserEntity, Integer> {
    
}
