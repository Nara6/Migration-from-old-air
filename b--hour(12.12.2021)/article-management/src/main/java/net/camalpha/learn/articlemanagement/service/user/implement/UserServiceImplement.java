package net.camalpha.learn.articlemanagement.service.user.implement;

import net.camalpha.learn.articlemanagement.model.user.entity.UserEntity;
import net.camalpha.learn.articlemanagement.model.user.form.UserCreateForm;
import net.camalpha.learn.articlemanagement.model.user.form.UserUpdateForm;
import net.camalpha.learn.articlemanagement.model.user.view.UserDetailView;
import net.camalpha.learn.articlemanagement.model.user.view.UserListView;
import net.camalpha.learn.articlemanagement.repository.user.UserRepository;
import net.camalpha.learn.articlemanagement.service.user.UserService;
import net.camalpha.learn.articlemanagement.shared.model.response.DataResponse;
import net.camalpha.learn.articlemanagement.shared.model.response.PageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImplement implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public PageResponse<UserListView> list(String query, Integer limit, Integer offset) {
        List<UserListView> users = userRepository.list(query, limit, offset).stream().map(UserServiceMapper::toListView).collect(Collectors.toList());
        Integer total = (int)userRepository.count(query, limit, offset);
        return new PageResponse<>(users, limit, offset, total);
    }

    @Override
    public DataResponse<UserDetailView> create(UserCreateForm form) {
        UserEntity entity = UserServiceMapper.toEntity(form);
        entity = this.userRepository.create(entity);
        if (entity != null) {
            return new DataResponse<>("success", 200, UserServiceMapper.toDetailView(entity));
        }
        return new DataResponse<>("failed to create entity", 400, null);
    }

    @Override
    public DataResponse<UserDetailView> get(Integer id) {
        UserEntity entity = this.userRepository.get(id);
        if (entity != null) {
            return new DataResponse<>("success", 200, UserServiceMapper.toDetailView(entity));
        }
        
        return new DataResponse<>("failed to find entity", 400, null);
    }

    @Override
    public DataResponse<UserDetailView> update(Integer id, UserUpdateForm form) {
        UserEntity entity = this.userRepository.get(id);
        if (entity != null) {
            entity = UserServiceMapper.toEntity(entity, form);
            entity = this.userRepository.update(id, entity);
            if (entity != null) {
                return new DataResponse<>("success", 200, UserServiceMapper.toDetailView(entity));
            }
            return new DataResponse<>("failed to update entity", 400, null);
        }

        return new DataResponse<>("failed to find entity", 400, null);
    }

    @Override
    public DataResponse<UserDetailView> delete(Integer id) {
        UserEntity entity = this.userRepository.get(id);
        if (entity != null) {
            this.userRepository.delete(id);
            if (this.userRepository.get(id) != null) {
                return new DataResponse<>("failed to delete entity", 400, null);
            } else {
                return new DataResponse<>("success", 200, null);
            }
        }

        return new DataResponse<>("failed to find entity", 400, null);
    }
    
}
