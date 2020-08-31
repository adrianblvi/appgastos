package com.ontimize.model.core.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ontimize.api.core.service.IGastoService;
import com.ontimize.db.AdvancedEntityResult;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.model.core.dao.CategoryDao;
import com.ontimize.model.core.dao.GastoDao;
import com.ontimize.model.core.dao.ParteDao;

@Service("GastoService")
@Lazy
public class GastoService implements IGastoService {

	@Autowired
	private GastoDao gastoDao;
	@Autowired
	CategoryDao categoryDao;
	@Autowired
	private ParteDao parteDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult gastoQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.gastoDao, keyMap, attrList);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult gastoInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.gastoDao, attrMap);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult gastoUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.gastoDao, attrMap, keyMap);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult gastoDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.gastoDao, keyMap);
	}

	@Override
	public EntityResult categoryQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.categoryDao, keyMap, attrList);
	}

	@Override
	public EntityResult categoryInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.categoryDao, attrMap);
	}

	@Override
	public EntityResult categoryUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.categoryDao, attrMap, keyMap);
	}

	@Override
	public EntityResult categoryDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.categoryDao, keyMap);
	}

	@Override
	public EntityResult gastoDetailsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.gastoDao, keyMap, attrList, gastoDao.QUERY_DETAILS);
	}

	@Override
	public EntityResult vgastoQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.gastoDao, keyMap, attrList, gastoDao.QUERY_VGASTO);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult vgastoDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(gastoDao, keyMap);
	}

	@Override
	public AdvancedEntityResult gastoDetailsPaginationQuery(Map<String, Object> keyMap, List<String> attrList,
			int recordNumber, int startIndex, List<String> orderBy) {
		return this.daoHelper.paginationQuery(this.gastoDao, keyMap, attrList, recordNumber, startIndex, orderBy,
				gastoDao.QUERY_DETAILS);

	}

	@Override
	public EntityResult parteQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.parteDao, keyMap, attrList);
	}
}
