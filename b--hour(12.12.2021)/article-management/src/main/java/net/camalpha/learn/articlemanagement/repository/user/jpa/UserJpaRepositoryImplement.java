package net.camalpha.learn.articlemanagement.repository.user.jpa;

import lombok.extern.slf4j.Slf4j;
import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import net.camalpha.learn.articlemanagement.repository.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Slf4j
public class UserJpaRepositoryImplement implements UserRepository {

    @Autowired
    private UserJpaRepository userJpaRepository;


    @Override
    public List<UserEntity> list(String query, Integer limit, Integer offset) {
        return this.userJpaRepository.findAll();
    }

    @Override
    public Integer count(String query, Integer limit, Integer offset) {
        return this.userJpaRepository.findAll().size();
    }

    @Override
    public UserEntity create(UserEntity entity) {
        return this.userJpaRepository.save(entity);
    }

    @Override
    public UserEntity get(Integer id) {
        return this.userJpaRepository.getById(id);
    }

    @Override
    public UserEntity update(Integer id, UserEntity entity) {
        entity.setId(id);
        return this.userJpaRepository.save(entity);
    }

    @Override
    public void delete(Integer id) {
        this.userJpaRepository.deleteById(id);
    }
}
