package net.camalpha.learn.articlemanagement.repository.user;

import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;

import java.util.List;

public interface UserRepository {

    List<UserEntity> list(String query, Integer limit, Integer offset);

    Integer count(String query, Integer limit, Integer offset);

    UserEntity create(UserEntity entity);

    UserEntity get(Integer id);

    UserEntity update(Integer id, UserEntity entity);

    void delete(Integer id);
}
