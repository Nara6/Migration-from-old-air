package net.camalpha.learn.articlemanagement.service.user.implement;

import java.time.LocalDateTime;

import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import net.camalpha.learn.articlemanagement.model.user.form.UserCreateForm;
import net.camalpha.learn.articlemanagement.model.user.form.UserUpdateForm;
import net.camalpha.learn.articlemanagement.model.user.view.UserDetailView;
import net.camalpha.learn.articlemanagement.model.user.view.UserListView;

public class UserServiceMapper {

    public static UserListView toListView(UserEntity entity) {
        return new UserListView(entity.getId(), entity.getName(), entity.getSex(),
                entity.getDateOfBirth() != null ? entity.getDateOfBirth().toString() : null, entity.getPhone(),
                entity.getAddress());
    }

    public static UserDetailView toDetailView(UserEntity entity) {
        return new UserDetailView(entity.getId(), entity.getName(), entity.getSex(),
                entity.getDateOfBirth() != null ? entity.getDateOfBirth().toString() : null, entity.getPhone(),
                entity.getAddress());
    }

    public static UserEntity toEntity(UserCreateForm form) {
        return new UserEntity(null, form.getName(), form.getSex(), LocalDateTime.now(), form.getPhone(),
                form.getAddress());
    }

    public static UserEntity toEntity(UserEntity user, UserUpdateForm form) {

        if (form.getName() != null) {
            user.setName(form.getName());
        }

        if (form.getSex() != null) {
            user.setSex(form.getSex());
        }

        if (form.getPhone() != null) {
            user.setPhone(form.getPhone());
        }

        if (form.getAddress() != null) {
            user.setAddress(form.getAddress());
        }

        return user;
    }

}