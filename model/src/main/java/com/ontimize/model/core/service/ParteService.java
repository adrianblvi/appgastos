package com.ontimize.model.core.service;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ontimize.api.core.service.IParteService;
import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.ontimize.model.core.dao.ParteDao;
import com.ontimize.model.core.dao.StatusDao;

@Service("ParteService")
@Lazy
public class ParteService implements IParteService {

	@Autowired
	private ParteDao parteDao;
	@Autowired
	private StatusDao statusDao;
	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	@Override
	public EntityResult parteQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.parteDao, keyMap, attrList);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult parteInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.parteDao, attrMap);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult parteUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		// comprobar el valor de status y si es cerrado poner fecha fin
		return this.daoHelper.update(this.parteDao, attrMap, keyMap);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult parteDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.parteDao, keyMap);
	}

	@Override
	public EntityResult statusQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.statusDao, keyMap, attrList);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult statusInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.insert(this.statusDao, attrMap);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult statusUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.update(this.statusDao, attrMap, keyMap);
	}

	@Override
	@Transactional(rollbackFor = Exception.class)
	public EntityResult statusDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException {
		return this.daoHelper.delete(this.statusDao, keyMap);
	}

	@Override
	public EntityResult parteDetailsQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		return this.daoHelper.query(this.parteDao, keyMap, attrList, parteDao.QUERY_DETAILS);
	}

}
