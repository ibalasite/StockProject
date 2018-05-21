//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./tutorial_types');
//HELPER FUNCTIONS AND STRUCTURES

var ConfigService_getConfig_args = function(args) {
};
ConfigService_getConfig_args.prototype = {};
ConfigService_getConfig_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ConfigService_getConfig_args.prototype.write = function(output) {
  output.writeStructBegin('ConfigService_getConfig_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ConfigService_getConfig_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args instanceof ttypes.InvalidOperation) {
    this.ouch = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.Config]);
    }
    if (args.ouch !== undefined && args.ouch !== null) {
      this.ouch = args.ouch;
    }
  }
};
ConfigService_getConfig_result.prototype = {};
ConfigService_getConfig_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.Config();
          elem6.read(input);
          this.success.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new ttypes.InvalidOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ConfigService_getConfig_result.prototype.write = function(output) {
  output.writeStructBegin('ConfigService_getConfig_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.SET, 0);
    output.writeSetBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.ouch !== null && this.ouch !== undefined) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ConfigService_getConfigByPath_args = function(args) {
  this.paths = null;
  if (args) {
    if (args.paths !== undefined && args.paths !== null) {
      this.paths = Thrift.copyList(args.paths, [null]);
    }
  }
};
ConfigService_getConfigByPath_args.prototype = {};
ConfigService_getConfigByPath_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.SET) {
        var _size8 = 0;
        var _rtmp312;
        this.paths = [];
        var _etype11 = 0;
        _rtmp312 = input.readSetBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.paths.push(elem14);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ConfigService_getConfigByPath_args.prototype.write = function(output) {
  output.writeStructBegin('ConfigService_getConfigByPath_args');
  if (this.paths !== null && this.paths !== undefined) {
    output.writeFieldBegin('paths', Thrift.Type.SET, 1);
    output.writeSetBegin(Thrift.Type.STRING, this.paths.length);
    for (var iter15 in this.paths)
    {
      if (this.paths.hasOwnProperty(iter15))
      {
        iter15 = this.paths[iter15];
        output.writeString(iter15);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ConfigService_getConfigByPath_result = function(args) {
  this.success = null;
  this.ouch = null;
  if (args instanceof ttypes.InvalidOperation) {
    this.ouch = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.Config]);
    }
    if (args.ouch !== undefined && args.ouch !== null) {
      this.ouch = args.ouch;
    }
  }
};
ConfigService_getConfigByPath_result.prototype = {};
ConfigService_getConfigByPath_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.SET) {
        var _size16 = 0;
        var _rtmp320;
        this.success = [];
        var _etype19 = 0;
        _rtmp320 = input.readSetBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = new ttypes.Config();
          elem22.read(input);
          this.success.push(elem22);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ouch = new ttypes.InvalidOperation();
        this.ouch.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ConfigService_getConfigByPath_result.prototype.write = function(output) {
  output.writeStructBegin('ConfigService_getConfigByPath_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.SET, 0);
    output.writeSetBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter23 in this.success)
    {
      if (this.success.hasOwnProperty(iter23))
      {
        iter23 = this.success[iter23];
        iter23.write(output);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.ouch !== null && this.ouch !== undefined) {
    output.writeFieldBegin('ouch', Thrift.Type.STRUCT, 1);
    this.ouch.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ConfigServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
ConfigServiceClient.prototype = {};
ConfigServiceClient.prototype.seqid = function() { return this._seqid; };
ConfigServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
ConfigServiceClient.prototype.getConfig = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getConfig();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getConfig();
  }
};

ConfigServiceClient.prototype.send_getConfig = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getConfig', Thrift.MessageType.CALL, this.seqid());
  var args = new ConfigService_getConfig_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ConfigServiceClient.prototype.recv_getConfig = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ConfigService_getConfig_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ouch) {
    return callback(result.ouch);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getConfig failed: unknown result');
};
ConfigServiceClient.prototype.getConfigByPath = function(paths, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_getConfigByPath(paths);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getConfigByPath(paths);
  }
};

ConfigServiceClient.prototype.send_getConfigByPath = function(paths) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getConfigByPath', Thrift.MessageType.CALL, this.seqid());
  var params = {
    paths: paths
  };
  var args = new ConfigService_getConfigByPath_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

ConfigServiceClient.prototype.recv_getConfigByPath = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new ConfigService_getConfigByPath_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.ouch) {
    return callback(result.ouch);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getConfigByPath failed: unknown result');
};
var ConfigServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
ConfigServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
ConfigServiceProcessor.prototype.process_getConfig = function(seqid, input, output) {
  var args = new ConfigService_getConfig_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getConfig.length === 0) {
    Q.fcall(this._handler.getConfig.bind(this._handler))
      .then(function(result) {
        var result_obj = new ConfigService_getConfig_result({success: result});
        output.writeMessageBegin("getConfig", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.InvalidOperation) {
          result = new ConfigService_getConfig_result(err);
          output.writeMessageBegin("getConfig", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getConfig", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getConfig(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.InvalidOperation) {
        result_obj = new ConfigService_getConfig_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getConfig", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getConfig", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
ConfigServiceProcessor.prototype.process_getConfigByPath = function(seqid, input, output) {
  var args = new ConfigService_getConfigByPath_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getConfigByPath.length === 1) {
    Q.fcall(this._handler.getConfigByPath.bind(this._handler), args.paths)
      .then(function(result) {
        var result_obj = new ConfigService_getConfigByPath_result({success: result});
        output.writeMessageBegin("getConfigByPath", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof ttypes.InvalidOperation) {
          result = new ConfigService_getConfigByPath_result(err);
          output.writeMessageBegin("getConfigByPath", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getConfigByPath", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getConfigByPath(args.paths, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.InvalidOperation) {
        result_obj = new ConfigService_getConfigByPath_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getConfigByPath", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getConfigByPath", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
