package net.camalpha.learn.articlemanagement.service.user.implement;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import net.camalpha.learn.articlemanagement.model.user.form.UserCreateForm;
import net.camalpha.learn.articlemanagement.model.user.form.UserUpdateForm;
import net.camalpha.learn.articlemanagement.model.user.view.UserDetailView;
import net.camalpha.learn.articlemanagement.model.user.view.UserListView;
import net.camalpha.learn.articlemanagement.repository.user.UserRepository;
import net.camalpha.learn.articlemanagement.service.user.UserService;
import net.camalpha.learn.articlemanagement.shared.model.response.DataResponse;
import net.camalpha.learn.articlemanagement.shared.model.response.PageResponse;

@Service
public class UserServiceImplement implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public PageResponse<UserListView> list(String query, Integer limit, Integer offset) {
        List<UserListView> users = userRepository.findAll().stream().map(UserServiceMapper::toListView)
                .collect(Collectors.toList());
        Integer total = (int) userRepository.count();
        return new PageResponse<>(users, limit, offset, total);
    }

    @Override
    public DataResponse<UserDetailView> create(UserCreateForm form) {
        UserEntity entity = UserServiceMapper.toEntity(form);
        entity = this.userRepository.save(entity);
        if (entity != null) {
            return new DataResponse<>("success", 200, UserServiceMapper.toDetailView(entity));
        }
        return new DataResponse<>("failed", 400, null);
    }

    @Override
    public DataResponse<UserDetailView> get(Integer id) {
        if (this.userRepository.existsById(id)) {
            UserEntity entity = this.userRepository.getById(id);
            if (entity != null) {
                return new DataResponse<>("success", 200, UserServiceMapper.toDetailView(entity));
            }
        }
        return new DataResponse<>("failed to find entity", 400, null);
    }

    @Override
    public DataResponse<UserDetailView> update(Integer id, UserUpdateForm form) {
        if (this.userRepository.existsById(id)) {
            UserEntity entity = this.userRepository.getById(id);
            if (entity != null) {
                entity = UserServiceMapper.toEntity(entity, form);
                entity = this.userRepository.save(entity);
                if (entity != null) {
                    return new DataResponse<>("success", 200, UserServiceMapper.toDetailView(entity));
                }
                return new DataResponse<>("failed to update entity", 400, null);
            }
        }
        return new DataResponse<>("failed to find entity", 400, null);
    }

    @Override
    public DataResponse<UserDetailView> delete(Integer id) {
        if (this.userRepository.existsById(id)) {
            UserEntity entity = this.userRepository.getById(id);
            if (entity != null) {
                this.userRepository.delete(entity);
                if (this.userRepository.existsById(id)) {
                    return new DataResponse<>("failed to delete entity", 400, null);
                } else {
                    return new DataResponse<>("success", 200, null);
                }
            }
        }
        return new DataResponse<>("failed to find entity", 400, null);
    }
}
